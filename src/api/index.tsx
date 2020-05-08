export const MUTATION_NEW_BEAN = `
    mutation newBean(info: CoffeeBean!) {
        bean {
            name
            region
            elevation
            variety
            soil
            harvested
            process
            roastLevel
        }

        bag {
            roasterName
            roastName
            roasted
            roasterNotes
        }
    }
`

export const MUTATION_NEW_BREW = `
    mutation newBrew(bag: ID!, info: CoffeeBrew) {
        brewed
        method
        beanWeight
        waterWeight
        flavors
    }
`

export default {
    post: (mutation: string, formdata: any) => {
        console.log(`API.post(${mutation}) ...`)
        return Promise.resolve({
            data: formdata
        })
    },

    get: (query: string) => {
        console.log(`API.get(${query}) ...`)
        return Promise.resolve({

        })
    }
}