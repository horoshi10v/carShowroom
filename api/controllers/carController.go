package controllers

import (
	"api/database"
	"api/models"
	"github.com/gofiber/fiber/v2"
)

func GetCars(c *fiber.Ctx) error {
	var cars []models.Car
	database.DB.Find(&cars)
	return c.Status(fiber.StatusOK).JSON(cars)
}

func NewCar(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	var car = models.Car{
		Brand: data["brand"],
		Name:  data["name"],
		//Type:         data["type"],
		//Transmission: data["transmission"],
		Color: data["color"],
		//Images:       data["images"],
		//Description:  data["description"],
		Engine: models.Engine{
			//	Type:            data["type"],
			//	Size:            data["size"],
			Power: data["power"],
			//	FuelConsumption: data["fuel_consumption"],
		},
	}
	database.DB.Create(&car)

	return c.JSON(car)
}
