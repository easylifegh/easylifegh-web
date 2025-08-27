// Mock Firebase-like service functions for authentication
export const signInWithGoogle = async () => {
  // Simulate Firebase Google sign-in
  return { user: { uid: "google-uid", provider: "google" } }
}

export const signInWithFacebook = async () => {
  // Simulate Firebase Facebook sign-in
  return { user: { uid: "facebook-uid", provider: "facebook" } }
}

export const signInWithApple = async () => {
  // Simulate Firebase Apple sign-in
  return { user: { uid: "apple-uid", provider: "apple" } }
}

// Firebase passwordless authentication - sends magic link to email
export const sendSignInLinkToEmail = async (email: string) => {
  // Simulate Firebase sendSignInLinkToEmail
  console.log(`Mock: Sending sign-in link to ${email}`)
  // In real Firebase, this would send an email with a magic link
  return { success: true }
}

// Firebase passwordless authentication - verifies magic link
export const isSignInWithEmailLink = (url: string) => {
  // Simulate Firebase isSignInWithEmailLink
  return url.includes("?mode=signIn&oobCode=")
}

export const signInWithEmailLink = async (email: string, emailLink: string) => {
  // Simulate Firebase signInWithEmailLink
  if (isSignInWithEmailLink(emailLink)) {
    return { user: { uid: "email-link-uid", email, provider: "password" } }
  }
  throw new Error("Invalid email link")
}
