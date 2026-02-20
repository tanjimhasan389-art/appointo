import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Chip,
  Rating
} from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import SpaIcon from '@mui/icons-material/Spa';

const services = [
  {
    id: 1,
    name: 'Medical Consultation',
    description: 'Professional medical consultation with certified doctors.',
    category: 'Health',
    duration: '30 min',
    price: '$75',
    rating: 4.8,
    icon: <MedicalServicesIcon />,
    color: '#e3f2fd'
  },
  {
    id: 2,
    name: 'Design Services',
    description: 'Graphic design and branding consultation.',
    category: 'Creative',
    duration: '60 min',
    price: '$120',
    rating: 4.9,
    icon: <DesignServicesIcon />,
    color: '#f3e5f5'
  },
  {
    id: 3,
    name: 'Fitness Training',
    description: 'Personal training and fitness consultation.',
    category: 'Fitness',
    duration: '45 min',
    price: '$65',
    rating: 4.7,
    icon: <FitnessCenterIcon />,
    color: '#e8f5e9'
  },
  {
    id: 4,
    name: 'Tutoring',
    description: 'Academic tutoring and subject consultation.',
    category: 'Education',
    duration: '60 min',
    price: '$55',
    rating: 4.6,
    icon: <SchoolIcon />,
    color: '#fff3e0'
  },
  {
    id: 5,
    name: 'IT Support',
    description: 'Technical consultation and IT troubleshooting.',
    category: 'Technology',
    duration: '45 min',
    price: '$90',
    rating: 4.5,
    icon: <ComputerIcon />,
    color: '#e0f7fa'
  },
  {
    id: 6,
    name: 'Spa & Wellness',
    description: 'Wellness consultation and spa treatments.',
    category: 'Wellness',
    duration: '90 min',
    price: '$150',
    rating: 4.9,
    icon: <SpaIcon />,
    color: '#fce4ec'
  }
];

const Services: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Available Services
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Browse and book from our wide range of professional services
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {services.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    p: 1, 
                    mr: 2, 
                    borderRadius: 1,
                    backgroundColor: service.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {service.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" component="h2">
                      {service.name}
                    </Typography>
                    <Chip 
                      label={service.category} 
                      size="small" 
                      sx={{ mt: 0.5 }}
                    />
                  </Box>
                </Box>
                
                <Typography color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={service.rating} precision={0.1} readOnly size="small" />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    {service.rating}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {service.duration}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {service.price}
                  </Typography>
                </Box>
              </CardContent>
              
              <CardActions>
                <Button 
                  component={RouterLink}
                  to={`/book/${service.id}`}
                  variant="contained" 
                  fullWidth
                >
                  Book Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;