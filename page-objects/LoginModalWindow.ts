import {expect,Locator,Page}from '@playwright/test'

export class LoginModalWindow {
    //Define selectors
    readonly page:Page
    readonly memberSignInText :Locator
    readonly accessYourPornHubAccountText:Locator
    readonly crossButton:Locator
    readonly errorMsg:Locator
    readonly userNameInput:Locator
    readonly userNameErrorInput:Locator
    readonly passwordInput:Locator
    readonly passwordErrorInput:Locator
    readonly rememberMeCheckbox:Locator
    readonly rememberMeText:Locator
    readonly submitButton:Locator
    readonly forgotPasswordButton:Locator
    readonly resendConfirmationEmail:Locator

    //init locator using constructor
    constructor(page:Page){
        this.page =page
        this.memberSignInText= page.locator('asd') 
        this.accessYourPornHubAccountText=page.locator('')
        this.crossButton = page.locator('crossButton') 
        this.errorMsg = page.locator('')
        this.userNameInput= page.locator('#usernameModal')
        this.userNameErrorInput= page.locator('#passwordModal')
        this.passwordInput= page.locator('')
        this.passwordErrorInput= page.locator('')
        this.rememberMeCheckbox= page.locator('')
        this.rememberMeText= page.locator('')
        this.submitButton= page.locator('#signinSubmit')
        this.forgotPasswordButton= page.locator('')
        this.resendConfirmationEmail= page.locator('')
    }

    //Define login page methods
    async openSignInModalWindow() {
        await this.page.goto('/')
        await this.page.click('.ph-icon-user-circle')
    }
}