# Public Folder

## 📄 Resume PDF

Place your resume PDF file here with the name:

**`Vridhi_Srivastava_Resume.pdf`**

### Important Notes:

1. **Filename must match** the one in `src/components/Navbar.jsx` (line 18)
2. The PDF will be downloaded when users click the "Resume" button in the navbar
3. Keep the file size reasonable (under 5MB recommended)

### If you want to use a different filename:

1. Rename your PDF to whatever you prefer
2. Update the filename in `src/components/Navbar.jsx`:

```javascript
// Line 18-19
link.href = '/Your_Resume_Name.pdf';
link.download = 'Your_Resume_Name.pdf';
```

---

**Current expected filename:** `Vridhi_Srivastava_Resume.pdf`
