# Rirekisho - Next.js Web Template

Rirekisho is a simple Next.js template for a personal website. It features a light and dark mode and displays key information defined in the `resume.json` file. Thanks to its JSON-based configuration, the website is easy to customize.

## Features
- **Easy configuration** via `resume.json`
- **Light/Dark mode** with automatic detection
- **Simple deployment** using GitHub and Vercel

## Installation & Setup

### 1. Download the Repository
You can download the repository in two ways:
- **Manually**: Go to the GitHub page and download the ZIP archive.
- **Using Git**: Open a terminal and run the following commands:
  ```sh
  git clone https://github.com/your-repo.git
  cd your-repo
  ```

### 2. Install Dependencies
If you have Node.js installed, you can install the dependencies by running:
```sh
npm install
```

### 3. Start the Website Locally
To start the website in development mode, use:
```sh
npm run dev
```
Then, open `http://localhost:3000` in your browser.

### 4. Customize `resume.json`
The `resume.json` file contains all the relevant details for the website, such as name, profession, contact details, and profiles. You can easily modify it:

```json
{
  "basics": {
    "name": "John Doe",
    "label": "Programmer",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "url": "https://johndoe.com",
    "summary": "A summary of John Doe…",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "Twitter",
        "username": "john",
        "url": "https://twitter.com/john"
      }
    ]
  }
}
```

## Deployment

### Using GitHub and Vercel
1. **Upload Code to GitHub**
   - If you edited the repository locally, push your changes to GitHub.
   - If you don't use Git, you can upload the files directly via the GitHub website.

2. **Deploy with Vercel (Recommended)**
   - Go to [Vercel](https://vercel.com/) and log in.
   - Click on "New Project" and select your repository.
   - Vercel will automatically detect that this is a Next.js project.
   - Click "Deploy" – your site will be online within seconds!

Your website will then be available via the Vercel-provided URL.

## Credits & Feedback
This template is based on the [resume.json](https://jsonresume.org/) format, which provides a standardized way to structure resume data.

If you have any feedback or suggestions, feel free to reach out via email: **liam.schenk@bluewin.ch**.

