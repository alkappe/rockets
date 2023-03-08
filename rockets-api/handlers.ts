import { db } from "./mongoClient"
import { ObjectId } from 'mongodb' 

const rocketCollection = db.collection<RocketProperties>('rockets')

export type RocketProperties = {
    name: string,
    description: string,
    height: number,
    diameter: number,
    mass: number
}

export type Rocket = RocketProperties & {_id: ObjectId}

export const createRocket = async (rocketProps: RocketProperties): Promise<Rocket> => {
    const {insertedId} = await rocketCollection.insertOne(rocketProps)
    return {
        _id: insertedId,
        ...rocketProps
    }
}

export const deleteRocket = (id: string) => {
    return rocketCollection.deleteOne({_id: new ObjectId(id)})
}

export const getRockets = () => {
    return rocketCollection.find().toArray()
}

export const updateRocket = async (id: string, rocketProps: RocketProperties) => {
    await rocketCollection.updateOne({ _id: new ObjectId(id) }, { $set: rocketProps })
    return {
        _id: id,
        ...rocketProps
    }
}

export const getRocket = async (id: string): Promise<Rocket | null> => {
    return rocketCollection.findOne({ _id: new ObjectId(id) })
}