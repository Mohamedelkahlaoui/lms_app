require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/user');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
//const fileUpload = require('express-fileupload');
const multer = require('multer');
const upload = multer();
const dbconfig = require('./config/database');

const app = express();

// Middleware
app.use('./users', upload.single('image'), require('./routes/user'));

// MongoDB connection
const mongoURI = process.env.MONGODB_ATLAS_URI || dbconfig.atlasUrl;

mongoose.connect(mongoURI, {
  serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
})
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message);
  });

// Static files
const publicDirectoryPath = path.join(__dirname, './view');
app.use(express.static(publicDirectoryPath));
app.use('/course-file', express.static('course-file'));

// CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Routes
try {
  console.log('Loading user route...');
  const user = require('./routes/user');
  app.use('/users', user);
  console.log('User route loaded successfully');
} catch (e) {
  console.error('Error loading user module:', e.message);
}

try {
  console.log('Loading assignment route...');
  const assignment = require('./routes/Assignment');
  app.use('/assignment', assignment);
  console.log('Assignment route loaded successfully');
} catch (e) {
  console.error('Error loading assignment module:', e.message);
}

try {
  console.log('Loading article route...');
  const article = require('./routes/article');
  app.use('/article', article);
  console.log('Article route loaded successfully');
} catch (e) {
  console.error('Error loading article module:', e.message);
}

try {
  console.log('Loading course route...');
  const course = require('./routes/course');
  app.use('/courses', course);
  console.log('Course route loaded successfully');
} catch (e) {
  console.error('Error loading course module:', e.message);
}

try {
  console.log('Loading courseModule route...');
  const courseModule = require('./routes/courseModule');
  app.use('/courses/:courseId/modules', courseModule);
  console.log('CourseModule route loaded successfully');
} catch (e) {
  console.error('Error loading courseModule module:', e.message);
}

try {
  console.log('Loading courseModuleItem route...');
  const courseModuleItem = require('./routes/courseModuleItem');
  app.use('/courses/:courseId/modules/:moduleId/module-item', courseModuleItem);
  console.log('CourseModuleItem route loaded successfully');
} catch (e) {
  console.error('Error loading courseModuleItem module:', e.message);
}

try {
  console.log('Loading discussions route...');
  const discussionsRouter = require('./routes/Discussions');
  app.use('/discussions', discussionsRouter);
  console.log('Discussions route loaded successfully');
} catch (e) {
  console.error('Error loading discussions module:', e.message);
}

try {
  console.log('Loading cheatingDetection route...');
  const cheatingDetection = require('./routes/cheatingDetection');
  app.use('/cheatingDetection', cheatingDetection);
  console.log('CheatingDetection route loaded successfully');
} catch (e) {
  console.error('Error loading cheatingDetection module:', e.message);
}

try {
  console.log('Loading notification route...');
  const notification = require('./routes/notification');
  app.use('/notification', notification);
  console.log('Notification route loaded successfully');
} catch (e) {
  console.error('Error loading notification module:', e.message);
}

try {
  console.log('Loading lecture route...');
  const lectureRouter = require('./routes/lecture');
  app.use('/courses/:courseId/lectures', lectureRouter);
  console.log('Lecture route loaded successfully');
} catch (e) {
  console.error('Error loading lecture module:', e.message);
}

try {
  console.log('Loading announcements route...');
  const AnnouncementsRouter = require('./routes/announcement');
  app.use('/announcements', AnnouncementsRouter);
  console.log('Announcements route loaded successfully');
} catch (e) {
  console.error('Error loading announcements module:', e.message);
}

try {
  console.log('Loading assessment route...');
  const assessmentRouter = require('./routes/assessment');
  app.use('/:courseId/assessments', assessmentRouter);
  console.log('Assessment route loaded successfully');
} catch (e) {
  console.error('Error loading assessment module:', e.message);
}

try {
  console.log('Loading submissions route...');
  const SubmissionRouter = require('./routes/submissions');
  app.use('/:courseId/assessments/:assessmentId/submissions', SubmissionRouter);
  console.log('Submissions route loaded successfully');
} catch (e) {
  console.error('Error loading submissions module:', e.message);
}

try {
  console.log('Loading gradeBook route...');
  const gradeBookRouter = require('./routes/gradeBook');
  app.use('/:courseId/', gradeBookRouter);
  console.log('GradeBook route loaded successfully');
} catch (e) {
  console.error('Error loading gradeBook module:', e.message);
}

try {
  console.log('Loading enrollment route...');
  const enrollmentRouter = require('./routes/enrollment');
  app.use('/:courseId/enrollments', enrollmentRouter);
  console.log('Enrollment route loaded successfully');
} catch (e) {
  console.error('Error loading enrollment module:', e.message);
}

try {
  console.log('Loading deadlines route...');
  const deadlineRouter = require('./routes/deadlines');
  app.use('/deadlines', deadlineRouter);
  console.log('Deadlines route loaded successfully');
} catch (e) {
  console.error('Error loading deadlines module:', e.message);
}

try {
  console.log('Loading achievements route...');
  const achievementsRouter = require('./routes/achievementsRouter');
  app.use('/achievements', achievementsRouter);
  console.log('Achievements route loaded successfully');
} catch (e) {
  console.error('Error loading achievements module:', e.message);
}

// Error handling
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  process.exit(1);
});

// Server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('app is on Port ' + port);
});
