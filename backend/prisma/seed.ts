import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    await prisma.product.createMany({
        data: [
            {
                name: 'Audemars Piguet Royal Oak SelfWinding',
                description: 'Silver Dial',
                price: 1.200500,
                imageUrl:'https://compraderelogiosdeluxo.com.br/wp-content/uploads/2023/02/Audemars-Piguet-.jpg'
            },
            {
                name: 'Rolex DateJust 41',
                description: 'Iron Oystersteel in white gold',
                price: 50000.00,
                imageUrl:'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1920/v1/catalogue/2025/upright-c/m126334-0009.jpg'
            },
            {
                name: 'Rolex Datejust 36',
                description: 'Emerald Cyster Perpetual',
                price: 80000.00,
                imageUrl:'https://www.corsage.com.br/rolex/wp-content/uploads/2023/07/m126234-0051_drp-upright-bba-with-shadow.webp'
            },
            {
                name: 'Patek Philippe Complications',
                description: 'Rose Gold',
                price: 97500.00,
                imageUrl:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1CZJcoF3e3Q97idCKKGSpk1wEEIlkKvhp8vNv_b8u-VckM-GrONzEhhkgmOtL1Fj30suTkFI4w3AlPWpbdUlPC8UhfpWiOeKkSdo18ObcgGOOsmf91sUVHA'
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