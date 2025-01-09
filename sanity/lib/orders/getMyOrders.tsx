import { defineQuery } from "next-sanity"

export async function getMyOrders(userId: string) {
    if (!userId) {
        throw new Error("User ID is required")
    }

    // Define the query to get orders based on user ID, sorted by orderDate descending
    const MY_ORDERS_QUERY = defineQuery(`
        *[_type == "order" && clerkUserId == $userId] | order(orderDate desc) 
        {
            ...,
            products[]{
                ...,
                product->
            }
        }
    `)

}