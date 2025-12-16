import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    await prisma.product.createMany({
        data: [
            {
                name: 'Audemars Piguet Royal Oak SelfWinding',
                description: '41mm 15500 Silver Dial',
                price: 1200500,
                imageUrl:'https://monochrome-watches.com/app/uploads/2020/05/Audemars-Piguet-Royal-Oak-Selfwinding-41mm-15500ST-Silver-Dial-2.jpg'
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