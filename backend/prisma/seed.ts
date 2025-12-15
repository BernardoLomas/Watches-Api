import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    await prisma.product.createMany({
        data: [
            {
                name: 'Nvidia RTX 5060Ti',
                description: 'DDR7 16GB GALAX',
                price: 3500.00
            },
            {
                name: 'Ryzen 7 5700x',
                description: '3.4GHz 8 Clocks AM4',
                price: 1000.00,
            },
            {
                name: 'Motherboard Aorus Elite B550M',
                description: 'AM4',
                price: 800.00,
            }
        ]
    })
}

main()
    .catch((e) => {
        console.error(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })