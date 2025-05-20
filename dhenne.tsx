// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
    provider = "prisma-client-js"
  }
  
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }
  
  // Modèle utilisateur
  model User {
    id            String    @id @default(cuid())
    email         String    @unique
    name          String?
    password      String
    createdAt     DateTime  @default(now())
    updatedAt     DateTime  @updatedAt
    role          Role      @default(USER)
    profile       Profile?
    posts         Post[]
    comments      Comment[]
  }
  
  // Profil utilisateur
  model Profile {
    id          String    @id @default(cuid())
    bio         String?
    avatar      String?
    userId      String    @unique
    user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)
    createdAt   DateTime  @default(now())
    updatedAt   DateTime  @updatedAt
  }
  
  // Articles/Posts
  model Post {
    id          String    @id @default(cuid())
    title       String
    content     String
    published   Boolean   @default(false)
    authorId    String
    author      User      @relation(fields: [authorId], references: [id])
    comments    Comment[]
    createdAt   DateTime  @default(now())
    updatedAt   DateTime  @updatedAt
  }
  
  // Commentaires
  model Comment {
    id          String    @id @default(cuid())
    content     String
    postId      String
    post        Post      @relation(fields: [postId], references: [id], onDelete: Cascade)
    authorId    String
    author      User      @relation(fields: [authorId], references: [id])
    createdAt   DateTime  @default(now())
    updatedAt   DateTime  @updatedAt
  }
  
  // Enum pour les rôles utilisateur
  enum Role {
    USER
    ADMIN
    MODERATOR
  } 