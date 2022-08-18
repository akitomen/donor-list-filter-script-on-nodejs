const prisma = require("../context/prisma");
const {Prisma} = require("@prisma/client");

async function deleteAllDonors() {
    await prisma.donor.deleteMany();
}

async function saveManyDonors(donorsData) {
    const donorsWithDecimal = donorsData.map(donorData =>
        ({...donorData, value: Prisma.Decimal(donorData.value)})
    );

    await prisma.donor.createMany({
        data: donorsWithDecimal,
        skipDuplicates: true,
    });
}

module.exports = {
    deleteAllDonors,
    saveManyDonors,
};