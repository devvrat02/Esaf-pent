import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function createData(avatar, name, experience, charge, certificate, status) {
  return {avatar, name, experience, charge, certificate, status};
}


const rows = [
  createData('assets/images/avatars/james.jpg','Jack Gilbert', '4 Years','5 M' ,'Chor chap','Add' ),
  createData('assets/images/avatars/katherine.jpg','Kathy Anderson', '4 Years','5 M' ,'Chor chap','Add' ),
  createData('assets/images/avatars/garry.jpg','Gary Gonzalez', '4 Years','5 M' ,'Chor chap','Add' ),
  createData('assets/images/avatars/andrew.jpg','Mark Turner', '4 Years','5 M' ,'Chor chap','Add' ),
  createData('assets/images/avatars/james.jpg','Jack Gilbert', '4 Years','5 M' ,'Chor chap','Add' ),

 ];


function OT(props) {
  return (
    <Paper className="w-full rounded-20 shadow overflow-hidden">
      <div className="flex items-center justify-between p-20 h-64">
        <Typography className="text-16 font-medium">Members</Typography>
          </div>
      <div className="table-responsive">
        <Table className="w-full min-w-full" size="small">
          <TableHead>
            <TableRow>
                      <TableCell className="whitespace-nowrap p-8 px-16">
                              
                      </TableCell>
                    
                  
                      <TableCell >
                        <Typography
                          color="textSecondary"
                          className="font-semibold sm:justify-start whitespace-nowrap p-8 px-16"
                        >
                          Name
                        </Typography>
                      </TableCell>
                       <TableCell>
                        <Typography
                          color="textSecondary"
                          className="font-semibold  justify-start  whitespace-nowrap p-8 px-16"
                        >
                          Experience
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          color="textSecondary"
                          className="font-semibold whitespace-nowrap p-8 px-16"
                        >
                          Charges
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          color="textSecondary"
                          className="font-semibold whitespace-nowrap p-8 px-16"
                        >
                          Certificates
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          color="textSecondary"
                          className="font-semibold whitespace-nowrap p-8 px-16"
                        >
                          Status
                        </Typography>
                      </TableCell>
                                                        
              
           
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className="h-64">
              <TableCell key={row.name} component="th" scope="row" className="px-16">
              <Avatar src={row.avatar} />
              </TableCell>
              <TableCell  component="th" scope="row" className="truncate font-semibold">
                {row.name}
              </TableCell>
              <TableCell  component="th" scope="row" className="truncate">
                {       row.experience}
              </TableCell>  
              <TableCell component="th" scope="row" className="truncate">
                {       row.charge}
              </TableCell>  
              <TableCell component="th" scope="row" className="truncate">
                {       row.certificate}
              </TableCell> 
               <TableCell component="th" scope="row" className="truncate">
               <Button variant="contained" color="success">
               {     row.status}
                 </Button>    
              </TableCell>
            </TableRow>
          ))}
             </TableBody>
        </Table>
      </div>
    </Paper>
  );
}

export default OT;
