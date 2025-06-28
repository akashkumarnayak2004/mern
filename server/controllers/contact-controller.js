import Contact from "../models/contact-model.js";

export const contactForm = async (req, res) => {
    try {
        const { username, email, message } = req.body;
        const contact = new Contact({
            username,
            email,
            message
        });
        await contact.save();
        res.status(201).json({ message: "Contact form submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

