# RexFit 💪

A comprehensive Gym Management application designed for fitness clubs and gyms, offering seamless role-based features for Admin, Member, and Trainer users. With real-time tracking, personalized training programs, and powerful analytics, RexFit helps gyms streamline operations and enhance member engagement.


## ScreenRcord & Demo 🎥

- **Frontend Live Demo**: [RexFit](https://rex-fit-nas-script-mern.vercel.app/)
- **Video Walkthrough**: [YouTube Demo](https://youtu.be/WecWIs6F58E)

## Features 🚀

- **Role-Based Access Control**: Authentication and authorization for Admin, Trainer, and Member roles
- **Attendance & Progress Tracking**: Members can mark attendance and log daily progress
- **Personal Training Programs**: Customizable training programs for individual goals
- **Member Stats Dashboard**: Trainers can monitor member performance and manage programs
- **Gym Analytics**: Admins can view key metrics such as member count, trainer count, income, and more
- **Notifications & Approvals**: Trainers join upon admin approval; automated emails for communications
- **Data Security**: JWT-based authentication for secure access

## Roles & Permissions 👥

- **Member**:
  - Mark attendance and log daily stats (e.g., weight, calorie intake, workout details)
  - View personal stats like height, weight, age, and calorie intake
  - Explore available personal training (PT) programs

- **Trainer**:
  - Submit signup request; access granted upon admin approval
  - Access dashboard with insights into members' workout stats
  - Create and manage personalized training programs

- **Admin**:
  - Access analytics, such as the number of members, trainers, total income, and daily new member counts
  - Manage members, trainers, and PT programs
  - Monitor overall gym activity and financial reports


## Technical Stack 🛠

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Tailwind CSS
- **Authentication**: JSON Web Tokens (JWT)
- **Data Visualization**: Chart.js
- **Email Notifications**: Nodemailer
- **Hosted**: [Vercel](https://rex-fit-nas-script-mern.vercel.app/)


## Environment Variables 🔐

FrontEnd
```env
VITE_REACT_APP_BASE_URL=baseurlofclient
```

Backend
```env
MONGODB_URI=your_mongodb_uri
PORT=5000
AUTH_EMAIL=emailforsendMail-withNodemailer
AUTH_PASS=password
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=refrestockensecret
GOOGLE_CLIENT_ID=googleclientId
CLIENT_URL=clientSideUrl
```



## Performance ⚡

- Optimized data retrieval for large member databases
- Efficient role-based data access with JWT authorization
- Real-time tracking and reporting with minimal latency

## Security Features 🔒

- JWT Authentication
- Role-based authorization
- CORS protection
- Secure password handling



## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Built with [Node.js](https://nodejs.org)
- Powered by [Express](https://expressjs.com) & [React](https://reactjs.org)
- Inspired by the need for efficient gym management

---
