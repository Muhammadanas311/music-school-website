"use server"
import db from '@/config/db'
export const contactAction=async (formdata:FormData) => {
    const { contactemail, contactmessage}= Object.fromEntries(formdata.entries())
    await db.execute("INSERT INTO musicqueries (email, msg) VALUES (?,?)",[contactemail,contactmessage])
}
