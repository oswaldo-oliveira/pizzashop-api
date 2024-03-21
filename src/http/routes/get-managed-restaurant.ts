import Elysia from 'elysia'
import { auth } from '../auth'
import { db } from '../../db/connection'

export const getManagedRestaurant = new Elysia()
  .use(auth)
  .get('/managed-restaurant', async ({ getCurrentUser }) => {
    const { restauranteId } = await getCurrentUser()

    if (!restauranteId) {
      throw new Error('User is not a manager.')
    }

    const managedRestaurant = db.query.restaurants.findFirst({
      where(fields, { eq }) {
        return eq(fields.id, restauranteId)
      },
    })

    return managedRestaurant
  })
