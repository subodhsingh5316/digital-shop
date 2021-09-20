export const GRAPHQL_API = 'https://www.eagleworksolutions.co.uk/eagleworksolutions/public/graphql'
export const GET_USER = `query users{
      users{
          id
          name
          email
      }
}`;
export const GET_CATEGORY = `query categories{
    categories {
        success
        statusCode
        message
        data{
          name
        }
      }
}`;
export const GET_PRODUCT = `query products{
    products{
       success
       statusCode
       message
       data{
           id
           name
           product_code
           quantity
           description
           status
           category_id
           is_featured
           price
           filter1
           filter2
           filter3
           getImage{
                 id
                 image_url
                 image_type
               }
           }
     }
}`;

export const REGISTER_USER = `mutation{
  createUser(
    name:"sharanveer",
    phone:"1234567890",
    email:"test222@gmail.com",
    password:"1234567890",
    postal_code:123456){
      success
      statusCode
      message
      data{
        id
        name
        email
      }
  }
}`;

export const LOGIN_USER = ` mutation{
  login(
    email:"test1@gmail.com",
    password:"1234567890"){
      success
      statusCode
      message
    data{
      api_token
    }
  }
}
`