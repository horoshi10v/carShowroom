package main

import (
	"github.com/gofiber/fiber/v2"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
)

func main() {

	_, err := gorm.Open(mysql.Open("root:12345678@/showroomDB"), &gorm.Config{})
	if err != nil {
		log.Panicln("can't open database connection")
	}
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	app.Listen(":3000")
}
