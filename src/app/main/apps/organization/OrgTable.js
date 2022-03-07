import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';
function createData(avatar, name, experience, charge, certificate, status) {
  return { avatar, name, experience, charge, certificate, status };
}


const rows = [
  createData('assets/images/avatars/james.jpg', 'Jack Gilbert', '8 Years', '900 K', 'CEH , OSCP', 'Add'),
  createData('assets/images/avatars/katherine.jpg', 'Kathy Anderson', '3 Years', '500 K', 'OSWE', 'Add'),
  createData('assets/images/avatars/garry.jpg', 'Gary Gonzalez', '1.5 Years', '300 K', 'Ret Hat', 'Add'),
  createData('assets/images/avatars/andrew.jpg', 'Mark Turner', '2 Years', '400 K', 'CISM', 'Add'),
  createData('assets/images/avatars/james.jpg', 'Jack Aldem', '1 Years', '300 K', 'CISCO NETWORK', 'Occupied'),

];
function Row(props) {
  const row = props.rows;
  const [Add, changeAdd] = React.useState(row.status);
  const changeState = () => {
    changeAdd("Occupied");
  };
  const changeStateADD = () => {
    changeAdd("Add");
  };


  return (<TableRow key={row.name} className="h-64">
    <TableCell component="th" scope="row" className="px-16">
      <Avatar src={row.avatar} />
    </TableCell>
    <TableCell component="th" scope="row" className="truncate font-semibold">
      {row.name}
    </TableCell>
    <TableCell align="center" component="th" scope="row" className="truncate">
      {row.experience}
    </TableCell>
    <TableCell align="center" component="th" scope="row" className="truncate">
      {row.charge}
    </TableCell>
    <TableCell align="center" component="th" scope="row" className="truncate">
      {row.certificate}
    </TableCell>
    <TableCell align="center" component="th" scope="row" className="truncate">
      {(Add == 'Add') ? <>   <Button variant="contained" color="success" onClick={changeState}>
        {Add}
      </Button></> : <>   <Button variant="contained" color="warning" onClick={changeStateADD}>
        {Add}
      </Button></>}

    </TableCell>
  </TableRow>);


}

function OrgTable() {
  return (
    <Paper className="w-full rounded-10 shadow overflow-hidden" variant="outlined" square>
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
              <TableCell align="center">
                <Typography
                  color="textSecondary"
                  className="font-semibold  justify-start  whitespace-nowrap p-8 px-16"
                >
                  Experience
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  color="textSecondary"
                  className="font-semibold whitespace-nowrap p-8 px-16"
                >
                  Charges
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  color="textSecondary"
                  className="font-semibold whitespace-nowrap p-8 px-16"
                >
                  Certificates
                </Typography>
              </TableCell>
              <TableCell align="center">
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
              <Row rows={row} />
            ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );

}

export default OrgTable;