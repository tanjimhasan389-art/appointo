import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Chip
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const upcomingAppointments = [
    { id: 1, title: 'Dental Checkup', date: '2024-01-15', time: '10:00 AM', status: 'confirmed' },
    { id: 2, title: 'Haircut', date: '2024-01-16', time: '2:30 PM', status: 'confirmed' },
    { id: 3, title: 'Meeting with Client', date: '2024-01-17', time: '11:00 AM', status: 'pending' }
  ];

  const recentActivity = [
    { id: 1, action: 'Booked appointment', service: 'Haircut', date: '2024-01-10' },
    { id: 2, action: 'Cancelled appointment', service: 'Massage', date: '2024-01-09' },
    { id: 3, action: 'Updated profile', service: '', date: '2024-01-08' }
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome back, {user?.name}!
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* Stats Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                  <EventIcon />
                </Avatar>
                <Typography variant="h6">Upcoming</Typography>
              </Box>
              <Typography variant="h4" align="center">3</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: 'success.main', mr: 2 }}>
                  <CheckCircleIcon />
                </Avatar>
                <Typography variant="h6">Completed</Typography>
              </Box>
              <Typography variant="h4" align="center">12</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: 'warning.main', mr: 2 }}>
                  <PendingIcon />
                </Avatar>
                <Typography variant="h6">Pending</Typography>
              </Box>
              <Typography variant="h4" align="center">1</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: 'info.main', mr: 2 }}>
                  <AccessTimeIcon />
                </Avatar>
                <Typography variant="h6">Total Hours</Typography>
              </Box>
              <Typography variant="h4" align="center">24.5</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Appointments */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Upcoming Appointments
            </Typography>
            <List>
              {upcomingAppointments.map((appointment) => (
                <ListItem key={appointment.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <EventIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={appointment.title}
                    secondary={`${appointment.date} at ${appointment.time}`}
                  />
                  <Chip
                    label={appointment.status}
                    color={appointment.status === 'confirmed' ? 'success' : 'warning'}
                    size="small"
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <List>
              {recentActivity.map((activity) => (
                <ListItem key={activity.id}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'grey.300' }}>
                      {activity.action.charAt(0)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={activity.action}
                    secondary={`${activity.service ? activity.service + ' • ' : ''}${activity.date}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* User Info Card */}
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="Account Information"
              avatar={
                <Avatar src={user?.avatar} alt={user?.name} />
              }
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Name
                  </Typography>
                  <Typography variant="body1">{user?.name}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1">{user?.email}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Role
                  </Typography>
                  <Chip
                    label={user?.role}
                    color={user?.role === 'admin' ? 'secondary' : 'primary'}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Member Since
                  </Typography>
                  <Typography variant="body1">January 2024</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;