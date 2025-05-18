package types

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type User struct {
	ID    int    `gorm:"primaryKey;autoIncrement"`
	Email string `gorm:"type:varchar(255);uniqueIndex"`
	Password     string
	Prefix       string
	FirstName    string `gorm:"not null"`
	LastName     string `gorm:"not null"`
	PhoneNumber  string
	GoogleID     string
	ProfileImage string
	CreatedAt    time.Time
	UpdatedAt    time.Time
}

type Post struct {
	ID           uuid.UUID  `gorm:"type:char(36);primaryKey"` // UUID stored as CHAR(36)
	AuthorID     int        `gorm:"not null"`
	Author       User       `gorm:"foreignKey:AuthorID;constraint:OnDelete:CASCADE"`
	ParentPostID *uuid.UUID `gorm:"type:char(36);default:null"`
	ParentPost   *Post      `gorm:"foreignKey:ParentPostID"`
	Content      string     `gorm:"type:text;not null"`
	CreatedAt    time.Time
	UpdatedAt    time.Time
}

type PostTag struct {
	ID           int       `gorm:"primaryKey;autoIncrement"`
	PostID       uuid.UUID `gorm:"type:char(36);not null"`
	Post         Post      `gorm:"foreignKey:PostID"`
	TaggedUserID int       `gorm:"not null"`
	TaggedUser   User      `gorm:"foreignKey:TaggedUserID"`
}

type Comment struct {
	ID        uuid.UUID `gorm:"type:char(36);primaryKey"`
	UserID    int       `gorm:"not null"`
	User      User      `gorm:"foreignKey:UserID"`
	PostID    uuid.UUID `gorm:"type:char(36);not null"`
	Post      Post      `gorm:"foreignKey:PostID"`
	Content   string    `gorm:"type:text;not null"`
	CreatedAt time.Time
	UpdatedAt time.Time
}

type Reaction struct {
	UserID    int       `gorm:"not null"`
	User      User      `gorm:"foreignKey:UserID"`
	PostID    uuid.UUID `gorm:"type:char(36);not null"`
	Post      Post      `gorm:"foreignKey:PostID"`
	Type      string    `gorm:"type:enum('like','dislike');not null"`
	CreatedAt time.Time
}

func (Reaction) TableName() string {
	return "reactions"
}

func (r *Reaction) BeforeCreate(tx *gorm.DB) (err error) {
	tx.Statement.AddClause(clause.OnConflict{
		Columns:   []clause.Column{{Name: "user_id"}, {Name: "post_id"}},
		DoNothing: true,
	})
	return
}

type Retweet struct {
	UserID    int       `gorm:"not null"`
	User      User      `gorm:"foreignKey:UserID"`
	PostID    uuid.UUID `gorm:"type:char(36);not null"`
	Post      Post      `gorm:"foreignKey:PostID"`
	CreatedAt time.Time
}

func (Retweet) TableName() string {
	return "retweets"
}

func (r *Retweet) BeforeCreate(tx *gorm.DB) (err error) {
	tx.Statement.AddClause(clause.OnConflict{
		Columns:   []clause.Column{{Name: "user_id"}, {Name: "post_id"}},
		DoNothing: true,
	})
	return
}
