# JA Travels Inc. — GitHub Pages Website

A responsive static website for JA Travels Inc., using the supplied logo and a worldwide destinations gallery.

## Publish on GitHub Pages for free

1. Sign in to GitHub and create a **public** repository, for example `ja-travels-website`.
2. Upload **all three website files and the `assets` folder** from this package to the repository root. Keep the filenames and folder structure unchanged.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then **Save**.
5. Wait for GitHub Pages to publish. Your address will look like `https://YOUR-USERNAME.github.io/ja-travels-website/`.
6. Edit files and commit changes to update the website.

## Important: Inquiry form

GitHub Pages cannot receive or store form submissions by itself. This form opens WhatsApp with a prefilled message addressed to the Chicago office **+1 773-954-4448**. The customer must press **Send** in WhatsApp; clicking the website button alone does not submit the inquiry. WhatsApp must be enabled on the number for this to work. To change the receiving number, edit `https://wa.me/17739544448` in `script.js`.

If you later want inquiries stored in a dashboard or delivered automatically by email, integrate a form service (e.g. Formspree) and configure its account-specific endpoint; do not place API secrets in public GitHub code.

## Customize

- `index.html`: site text, contact numbers, sections, and form fields.
- `styles.css`: colors, fonts, layout.
- `script.js`: destination names, filters, destination images, and WhatsApp message.
- `assets/logo.png`: your provided official logo.

Destination photos are loaded from Unsplash over the internet and may not always depict the exact named destination; replace them with properly licensed, verified photos before a production launch. External photos can change or stop working. This is a marketing/inquiry site, not a live airfare booking engine. No prices, flight availability, visa guarantees, or travel packages are represented as confirmed.

## Modern header update
The home page now uses `assets/modern-travel-header.webp` and Poppins/Inter fonts. The two functional links below the banner are real clickable HTML buttons. The banner artwork contains decorative text and a depicted button; the separate HTML button is the working action.

## Back-to-top button
A floating blue Back to Top button appears after scrolling 320 pixels. It works on desktop and mobile and respects reduced-motion preferences. No configuration needed.


## Navigation update
The original white header has been removed. On wide screens, transparent accessible HTML links align with the five navigation labels printed in the hero banner image. On mobile screens (800px or less), a compact real-text navigation bar appears below the image, because the embedded labels become too small. The hero image is still a static image; the clickable areas are HTML links over it.


## Compact original banner update
This build retains the original approved JA Travels blue-and-gold hero artwork, logo, typography, landmark collage and clickable menu hotspots, while displaying it at a shorter fixed responsive height. The banner's visible Plan Your Trip Today button is now clickable and takes visitors to the inquiry form. On mobile, the separate navigation and inquiry buttons remain accessible.


## Fitted banner update
The hero now uses `assets/fitted-travel-banner.webp`, an ultra-wide panoramic artwork displayed at its natural aspect ratio (`height:auto; object-fit:contain`) to prevent stretching. The original design, functional visible navigation, and inquiry buttons are retained.


## Updated header and banner
The supplied image is saved as `assets/world-landmarks-banner.webp`. The navigation is a separate sticky header with the JA Travels logo and functional links. The banner uses `object-fit: cover` so it never stretches. On narrower screens it crops naturally.

## Pakistan car rental
The Services section includes a Pakistan car rental inquiry link. Selecting it opens dedicated pickup city, pickup location, dates, and car/driver preference fields in the quote form. Submission opens WhatsApp with these details; the customer must press Send. No live vehicle availability or booking is provided.

Pakistan Car Rental is listed under Services without advertised pricing. Customers can request car rental with a driver, subject to confirmation of availability and terms.


Update: The Back to Top button now floats on the bottom-left of the screen, opposite the WhatsApp chat button.

Destination image update: Turkey uses assets/blue-mosque.jpg; United States uses assets/willis-tower-chicago.jpg. Both remain clickable.

Updated Willis Tower photo to an undistorted image; original proportions preserved with object-fit: cover.

Saudi Arabia destination tile now fills only “Saudi Arabia” in the inquiry Destination field; Umrah & Hajj button remains unchanged.


Global hero update: the banner is assets/global-travel-hero.webp. Logo background has been removed in assets/logo.png.

Latest update: white sticky wavy header with navy navigation; tightly cropped transparent JA Travels logo in header and on global travel banner.

Latest update: centered transparent logo on global hero, smaller fully visible plane at left.
