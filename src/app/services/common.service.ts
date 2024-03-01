import { Injectable } from "@angular/core";
//import * as jwt from 'jsonwebtoken';


@Injectable({
    providedIn: 'root'
})
export class commonService {

    getLoggedInUser() {
        let authToken = localStorage.getItem('userData')
        const LogedinUser = JSON.parse(authToken);
        return LogedinUser.loginUser
        // let dec = jwt.decode(authToken)
        // console.log(token.loginUser)



    }

}