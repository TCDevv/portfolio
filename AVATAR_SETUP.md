# 3D Avatar Setup Guide

## Overview

Your portfolio now features an interactive 3D avatar display with the following effects:

- ✨ **Floating animation** - Avatar gently floats up and down
- 🔄 **Rotating rings** - Two animated rings orbit around the avatar
- 🖱️ **Mouse tracking** - Avatar follows your mouse movement with 3D perspective
- 💫 **Particle effects** - Decorative glowing particles around the avatar
- 📱 **Responsive design** - Looks great on all screen sizes

## Adding Your Avatar Image

### Option 1: Use Your Own Photo

1. Save your avatar photo from the CV (the one in red Speranza polo) as:
   ```
   portfolio/public/images/avatar.jpg
   ```

2. Recommended specifications:
   - Format: JPG, PNG, or WebP
   - Dimensions: At least 500x500px (square works best)
   - File size: Under 500KB for best performance

### Option 2: Use Current Placeholder

The component automatically shows your initials "CT" with a gradient background if no image is found.

## Components Created

### 1. AvatarSection.tsx
- Main CSS-based 3D avatar component
- Uses GSAP for smooth animations
- Mouse tracking and interactive effects
- Fallback to initials if image not found

### 2. Avatar3D.tsx
- Advanced Three.js 3D implementation
- Can be used instead of AvatarSection for even more impressive effects
- Requires your avatar image as texture

### 3. Updated Hero.tsx
- Two-column layout (avatar + text)
- Responsive on mobile (stacks vertically)
- Coordinated entrance animations

## Features

### Mouse Interaction
Move your mouse over the avatar to see it tilt in 3D space following your cursor!

### Animations
- Continuous floating motion
- Rotating decorative rings
- Pulsing particle effects
- Smooth entrance animation on page load

### Status Badge
Shows "Available for work" with a green indicator - you can customize this in:
```typescript
portfolio/src/components/AvatarSection.tsx (line 128)
```

## Customization

### Change Colors
Edit the gradient colors in `AvatarSection.tsx`:
```typescript
// Line 100: Change from primary to secondary
className="bg-gradient-to-r from-primary to-secondary"

// Line 135: Change status badge gradient
className="bg-gradient-to-r from-primary to-secondary"
```

### Adjust Animation Speed
In `AvatarSection.tsx`:
```typescript
// Line 35: Floating speed
gsap.to(avatar, {
  y: -20,
  duration: 2, // Change this number (higher = slower)
  ...
});

// Line 44-52: Ring rotation speeds
duration: 10,  // First ring speed
duration: 15,  // Second ring speed
```

### Remove Status Badge
Comment out lines 127-134 in `AvatarSection.tsx`

## Using the Three.js Version (Optional)

For an even more advanced 3D effect, replace `AvatarSection` with `Avatar3D` in `Hero.tsx`:

```typescript
// Change this:
import AvatarSection from './AvatarSection';

// To this:
import Avatar3D from './Avatar3D';

// And change the component:
<AvatarSection />
// To:
<Avatar3D imageUrl="/images/avatar.jpg" />
```

The Three.js version includes:
- Real 3D sphere with your photo as texture
- Interactive orbit controls
- More realistic lighting
- Smoother 3D rotations

## Troubleshooting

### Avatar image not showing?
1. Check that the file is saved as `public/images/avatar.jpg`
2. Refresh the browser (Ctrl + F5)
3. Check browser console for errors

### Animations not smooth?
- Close other heavy applications
- Try using Chrome or Edge for best performance
- Reduce particle count in line 116-134 of `AvatarSection.tsx`

### Want to go back to centered text layout?
Revert the Hero.tsx changes to use the original centered layout from git history.

## Next Steps

1. Add your avatar.jpg image to `public/images/`
2. Customize the colors to match your brand
3. Adjust animation speeds to your preference
4. Consider trying the Three.js version for more wow factor!

---

Built with React, TypeScript, GSAP, and Three.js
