import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Test de création d'un utilisateur
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        password: 'testpassword123',
        name: 'Test User',
      },
    })
    console.log('✅ Utilisateur créé avec succès:', user)

    // Test de lecture de l'utilisateur
    const readUser = await prisma.user.findUnique({
      where: { email: 'test@example.com' },
    })
    console.log('✅ Utilisateur lu avec succès:', readUser)

    // Nettoyage - Suppression de l'utilisateur de test
    await prisma.user.delete({
      where: { email: 'test@example.com' },
    })
    console.log('✅ Utilisateur supprimé avec succès')

  } catch (error) {
    console.error('❌ Erreur lors du test:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 