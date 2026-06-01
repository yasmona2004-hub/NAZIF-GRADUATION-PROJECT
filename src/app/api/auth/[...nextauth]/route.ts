import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name:"yasminaa",
        credentials:{
            password:{},
            email:{}
        },
        authorize:async(credentials)=>{
            const response = await fetch("http://localhost:5203/api/Auth/login",{
                method:"post",
                body: JSON.stringify({
                    email:credentials?.email,
                    password:credentials?.password
                }),
                headers:{'content-type':'application/json'}
            })
            const payload = await response.json()
            console.log(payload)
            return {
                id:payload.user.email,
                user:payload.user,
                token:payload.token
            }
        }
    })
  ]
})

export { handler as GET, handler as POST }