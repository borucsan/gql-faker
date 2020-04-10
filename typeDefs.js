const { gql } = require('apollo-server')

module.exports = gql`
  type Query {
    """
    Fake person data
    """
    randomPerson: Person
    """
    Random products list
    """
    randomProducts: [Product!]!
  }

  type Person {
    """
    Person name data
    """
    name: PersonName!
    """
    Person address data
    """
    address: Address!
    """
    Person profile data
    """
    profile: Profile!
  }

  type PersonName {
    """
    First name
    """
    first: String!
    """
    Last name
    """
    last: String!
    """
    Name prefix
    """
    prefix: String
    """
    Name suffix
    """
    suffix: String
  }

  type Address {
    """
    Street address with number
    """
    streetAddress: String!
    city: String!
    zipCode: String!
    state: String!
    country: String!
  }

  type Profile {
    username: String!
    email: String!
    """
    URL to avatar image
    """
    avatar: String!
  }

  type Product {
    """
    Product color name
    """
    color: String
    """
    Which department to look
    """
    department: String!
    """
    Full product name
    """
    productName: String!
    """
    Product price
    """
    price: String!
    """
    One word describe
    """
    productAdjective: String!
    """
    Product material
    """
    productMaterial: String
    """
    Product type
    """
    product: String!
  }
`
