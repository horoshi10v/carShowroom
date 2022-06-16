package models

import "gorm.io/gorm"

type VisitorList struct {
	gorm.Model
	Id     uint `json:"id"`
	UserId uint `gorm:"foreignKey:Id;constraint:OnDelete:CASCADE;"`
	CarId  uint `gorm:"foreignKey:Id;constraint:OnDelete:CASCADE;"`
}
