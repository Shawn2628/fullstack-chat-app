import User from "../models/user.model";
import { config } from "dotenv";
import { connectDB } from "../lib/db.js";

config();

const seedUsers = [
    // Female Users
    {
        email: "mornica.williams@example.com",
        fullName: "Mornica",
        password: "987654",
        profilePic: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        email: "mbali.duba@example.com",
        fullName: "Mbali",
        password: "987654",
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        email: "zanele.qwaba@example.com",
        fullName: "Zanele",
        password: "987654",
        profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
        email: "chalse.wartz@example.com",
        fullName: "Chalse",
        password: "987654",
        profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
        email: "faith.zee@example.com",
        fullName: "Faith",
        password: "987654",
        profilePic: "https://randomuser.me/api/portraits/women/9.jpg",
    },

    // Male Users
    {
        email: "benjamin.taylor@example.com",
        fullName: "Ben",
        password: "987654",
        profilePic: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        email: "clark.kent@example.com",
        fullName: "Clark",
        password: "987654",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        email: "Brixxy.N@example.com",
        fullName: "Brixxy",
        password: "987654",
        profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
        email: "nathan.lee2example.com",
        fullName: "Nathan",
        password: "987654",
        profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    },
];

const seedDatabase = async () => {
    try {
        await connectDB();

        await User.inserMany(SeedUsers);
        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

seedDatabase();