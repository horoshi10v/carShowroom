package routes

import (
	"api/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Get("/", controllers.HelloDemo)
	app.Post("/register", controllers.Register)
	app.Post("/login", controllers.Login)
	app.Get("/user", controllers.User)
	app.Post("/logout", controllers.Logout)

	app.Get("/cars", controllers.GetCars)
	app.Post("/addCar", controllers.NewCar)

}
