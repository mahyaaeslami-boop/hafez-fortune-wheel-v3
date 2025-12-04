# 🔐 Admin Panel Guide - Yalda Night Website

## 📍 Current Deployment Status

### **Version 3.0 (Current - Main Branch)**
- **URL**: https://mahyaaeslami-boop.github.io/hafez-fortune-wheel-v3/
- **Branch**: `main`
- **Status**: ✅ Live and Stable
- **Features**: Storytelling About section, magical wheel effects, contact info, admin-only leaderboard

### **Version 4.0 (Optimized - New Branch)**
- **URL**: Will be available at a different GitHub Pages URL (see setup below)
- **Branch**: `v4-optimized`
- **Status**: ⏳ Ready to deploy
- **Improvements**: Compact quiz UI, reduced scrolling, better UX, accessible admin panel

---

## 🎯 How to Access Quiz Results (Admin Panel)

### Method 1: Using the Admin Panel Button (V4 Optimized)

1. **Open the website** (v4 when deployed)
2. **Scroll to the footer** at the bottom of the page
3. **Click the "🔐 Admin Panel" button**
4. The admin panel will appear
5. **Enter password**: `mahya2024` or `yalda2024`
6. Click "Access" button
7. ✅ You can now:
   - View all quiz results
   - See participant names, scores, times
   - Download results as CSV file

### Method 2: Manual Access (Current V3)

1. **Open the website**
2. **Scroll to the Quiz section**
3. **Open browser console**:
   - Windows/Linux: Press `F12` or `Ctrl + Shift + I`
   - Mac: Press `Cmd + Option + I`
4. **Run this command** in the console:
   ```javascript
   document.getElementById('leaderboardSection').style.display = 'block';
   document.getElementById('leaderboardSection').scrollIntoView({behavior: 'smooth'});
   ```
5. **Enter password**: `mahya2024`
6. ✅ Access granted!

---

## 📧 Email Setup for Quiz Results

Quiz results are automatically sent to your email when participants complete the quiz.

### Current Email Configuration:
- **Service**: FormSubmit.co (free, no registration needed)
- **Email in code**: `mahya.eslami@example.com` (placeholder)

### To Update Your Email:

1. **Open `script.js`**
2. **Find line ~1023** (search for `formsubmit.co`)
3. **Replace** `mahya.eslami@example.com` with your actual email:
   ```javascript
   fetch('https://formsubmit.co/ajax/YOUR_ACTUAL_EMAIL@gmail.com', {
   ```
4. **Save and push changes**
5. **Important**: On the first quiz submission, FormSubmit will send you a confirmation email. Click the link to activate.

### What Gets Sent:
- Participant name
- Score (e.g., "8/10")
- Percentage
- Time taken
- Date/time of completion

---

## 🚀 Deploy Version 4 to New URL

You have two options:

### Option A: Create a New Repository (Separate URLs)

1. **Create new repository** on GitHub:
   - Name: `hafez-fortune-wheel-v4` or `yalda-night-v4`
   - Public repository

2. **Clone and push v4**:
   ```powershell
   cd "c:\Users\Amerius\Desktop\Mahya\github\yalda"
   git clone c:\Users\Amerius\Desktop\Mahya\github\yalda\hafez-fortune-wheel-v3 hafez-fortune-wheel-v4
   cd hafez-fortune-wheel-v4
   git checkout v4-optimized
   git remote set-url origin https://github.com/mahyaaeslami-boop/hafez-fortune-wheel-v4.git
   git push -u origin v4-optimized:main
   ```

3. **Enable GitHub Pages**:
   - Go to new repository Settings
   - Pages section
   - Source: Deploy from branch
   - Branch: `main`
   - Save

4. **Result**:
   - V3: https://mahyaaeslami-boop.github.io/hafez-fortune-wheel-v3/
   - V4: https://mahyaaeslami-boop.github.io/hafez-fortune-wheel-v4/

### Option B: Update Main Branch (Single URL)

1. **Merge v4 into main**:
   ```powershell
   cd "c:\Users\Amerius\Desktop\Mahya\github\yalda\hafez-fortune-wheel-v3"
   git checkout main
   git merge v4-optimized
   git push origin main
   ```

2. **Result**:
   - V3 is replaced by V4
   - Single URL: https://mahyaaeslami-boop.github.io/hafez-fortune-wheel-v3/
   - V3 is still available via tag: `v3.0`

---

## 🔑 Admin Passwords

**Current passwords** (you can change these in `script.js`):
- `mahya2024` ✓
- `yalda2024` ✓

### To Change Password:

1. Open `script.js`
2. Find line ~766 (search for `checkAdminPassword`)
3. Change:
   ```javascript
   if (password === 'mahya2024') {
   ```
   To:
   ```javascript
   if (password === 'YOUR_NEW_PASSWORD') {
   ```

---

## 📊 Quiz Results Data

### Where Results Are Stored:

1. **LocalStorage** (browser): Backup storage
2. **Email** (via FormSubmit): Sent to your configured email

### To Export Results:

1. Access admin panel
2. Click "📊 Download CSV" button
3. CSV file will download with all results

### CSV Format:
```
Rank,Name,Score,Total Questions,Percentage,Time Taken (seconds),Date
1,John Doe,10,10,100.0%,95,12/3/2025, 2:30:00 PM
2,Jane Smith,9,10,90.0%,120,12/3/2025, 3:15:00 PM
...
```

---

## 🆘 Troubleshooting

### "Can't see admin panel button"
- **V3**: Button not available, use console method
- **V4**: Button is in footer - scroll to bottom

### "Password not working"
- Default passwords: `mahya2024` or `yalda2024`
- Check browser console for errors
- Verify you're on correct version

### "Not receiving emails"
- Check spam folder
- Verify email in `script.js` line ~1023
- First submission requires confirmation email click

### "CSV download not working"
- Must be in admin panel
- Check if any results exist
- Try different browser

---

## 📞 Contact Information Update

Current placeholders in contact section:
- Email: `mahya.eslami@example.com`
- LinkedIn: `linkedin.com/in/mahyaeslami`
- Website: `mahyaeslami.com`

**Update in `index.html` lines 405-415**

---

## ✅ Recommendations

1. **Use Option A** (separate repositories) to keep both versions live
2. **Update email** in FormSubmit immediately
3. **Test admin panel** after deployment
4. **Bookmark** admin access for quick entry
5. **Regular CSV exports** for backup

---

**Created by Mahya Eslami | December 2025**
