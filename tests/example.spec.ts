import { test, expect } from '@playwright/test';
import { LoginModalWindow } from '../page-objects/LoginModalWindow';


test.describe.parallel('Login / Logout modal window',()=>{
  let loginModalWindow :LoginModalWindow
  
  test.beforeEach(async({page})=>{
    loginModalWindow = new LoginModalWindow (page)
    await loginModalWindow.openSignInModalWindow()
  })

  test('// Valid Credentials: Ensure a user can log in with correct credentials.', async ({ page }) => {
    await page.goto('/');
  });
})


//  Invalid Credentials: Try incorrect usernames and passwords to ensure the login fails appropriately.
//  Empty Fields: Ensure appropriate error messages are displayed when one or both fields are left empty.
//  Case Sensitivity: Ensure that the username/email and password fields handle case sensitivity properly.
//  Remember Me: If there's a "Remember Me" option, test that it works and maintains the user's session.
//  Password Visibility Toggle: Test the functionality of the "show/hide" password icon if available.