import React, { useEffect } from 'react';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchAnnouncements } from '../redux/slices/announcementsSlice';
import { RootState } from '../redux/store';

const AnnouncementCom = () => {
  const dispatch = useAppDispatch();
  const { data: allAnnouncements, status, error } = useAppSelector((state: RootState) => state.announcements);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAnnouncements());
    }
  }, [status, dispatch]);

  const Announ = (props: any) => {
    return (
      <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
      flexDirection="row"
      columnGap="1vw"
      sx={{
        bgcolor: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        padding: 2,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        flexWrap: 'wrap', 
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '20%' } }}>
        <Box display="flex" flexDirection="row">
          <Avatar
            sx={{ width: '30px', height: '30px' }}
            src="https://as2.ftcdn.net/v2/jpg/01/16/20/73/1000_F_116207330_1lS88P3GEoREbiakuFySP9woM4oK1ras.jpg"
          />
          <Typography sx={{ fontStyle: 'italic', fontSize: '20px', marginLeft: '10px' }}>
            {props.announcement.doctor}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: '15px', fontFamily: 'serif', marginLeft: 5 }}>
            {props.announcement.event}
          </Typography>
        </Box>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
      <Box sx={{ marginLeft: { xs: '0', md: '7%' }, maxWidth: 500, width: { xs: '100%', md: '50%' } }}>
        <Typography sx={{ fontSize: '18px', fontFamily: 'serif' }}>{props.announcement.discussion}</Typography>
      </Box>
    </Box>
  );
};

return (
  <Box display="flex" flexDirection="column" rowGap="2vh" padding="10px" sx={{ overflowY: 'auto', maxHeight: '300px' }}>
    <Typography variant="h4" sx={{ fontFamily: 'serif' }}>
      Announcements
    </Typography>
    {status === 'loading' ? (
      <Typography>Loading...</Typography>
    ) : status === 'succeeded' ? (
      allAnnouncements.map((announcement: any) => <Announ announcement={announcement} key={announcement.id} />)
    ) : (
      <Typography>Error loading announcements: {error}</Typography>
    )}
  </Box>
  );
};

export default AnnouncementCom;