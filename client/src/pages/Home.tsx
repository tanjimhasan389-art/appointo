import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Card,
  CardContent
  // Removed CardActions since it's not used
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAuth } from '../contexts/AuthContext';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: <CalendarTodayIcon sx={{ fontSize: 40 }} />,
      title: 'Easy Scheduling',
      description: 'Book appointments effortlessly with our intuitive interface.'
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 40 }} />,
      title: 'Time Management',
      description: 'Efficiently manage your schedule and optimize your time.'
    },
    {
      icon: <NotificationsIcon sx={{ fontSize: 40 }} />,
      title: 'Smart Reminders',
      description: 'Never miss an appointment with automated reminders.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          mb: 4
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome to Appointo
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Streamline your appointment scheduling process. Book, manage, and track
            appointments with ease using our modern scheduling system.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            {isAuthenticated ? (
              <Button
                component={RouterLink}
                to="/dashboard"
                variant="contained"
                size="large"
              >
                Go to Dashboard
              </Button>
            ) : (
              <>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  size="large"
                >
                  Get Started
                </Button>
                <Button
                  component={RouterLink}
                  to="/services"
                  variant="outlined"
                  size="large"
                >
                  Browse Services
                </Button>
              </>
            )}
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
          Why Choose Appointo?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Paper
        sx={{
          p: 6,
          my: 8,
          backgroundColor: (theme) => theme.palette.grey[50]
        }}
      >
        <Container maxWidth="sm">
          <Typography component="h2" variant="h4" align="center" gutterBottom>
            Ready to streamline your appointments?
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Join thousands of users who trust Appointo for their scheduling needs.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              component={RouterLink}
              to={isAuthenticated ? '/dashboard' : '/register'}
              variant="contained"
              size="large"
            >
              {isAuthenticated ? 'Go to Dashboard' : 'Start Free Trial'}
            </Button>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};

export default Home;