package main

import (
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/graphql-go/graphql"
	"github.com/graphql-go/handler"
	"github.com/streadway/amqp"
)

var m = make(map[string]int)

func receiveMessages() <-chan amqp.Delivery {
	conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")
	if err != nil {
		log.Fatalf("Failed to connect to RabbitMQ: %v", err)
	}

	ch, err := conn.Channel()
	if err != nil {
		log.Fatalf("Failed to open a channel: %v", err)
	}

	q, err := ch.QueueDeclare(
		"QueueService",
		true,
		false,
		false,
		false,
		nil,
	)

	if err != nil {
		log.Fatalf("Failed to declare a queue: %v", err)
	}

	msgs, err := ch.Consume(
		q.Name,
		"",
		true,
		false,
		false,
		false,
		nil,
	)

	if err != nil {
		log.Fatalf("Failed to register a consumer: %v", err)
	}

	return msgs
}

type Message struct {
	Content string `json:"content"`
}

var rootQuery = graphql.ObjectConfig{
	Name: "Query",
	Fields: graphql.Fields{
		"lastMessage": &graphql.Field{
			Type: graphql.String,
			Resolve: func(p graphql.ResolveParams) (interface{}, error) {
				return fmt.Sprint(m), nil
			},
		},
	},
}

var schema, _ = graphql.NewSchema(
	graphql.SchemaConfig{
		Query: graphql.NewObject(rootQuery),
	},
)

func main() {
	channel := receiveMessages()
	go func() {
		for msg := range channel {
			data := string(msg.Body)
			formatted := strings.Split(data, ":")[1]
			m[formatted] += 1
		}
	}()

	httpHandler := handler.New(&handler.Config{
		Schema: &schema,
		Pretty: true,
	})

	http.HandleFunc("/graphql", httpHandler.ServeHTTP)

	log.Fatal(http.ListenAndServe(":1234", nil))

}
