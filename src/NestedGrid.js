import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BasicDatePicker() {
    const [value, setValue] = React.useState(null);
  
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
}

function FirstFormRow() {
  return (
    <React.Fragment>
      <Grid item xs={2}>
       <Item><TextField id="outlined-basic" label="회사" variant="outlined" /></Item>
        {/* <Item>Item</Item> */}
      </Grid>
      {/* <Grid item xs={2}>
        <Item><TextField id="outlined-basic" label="등록일" variant="outlined" /></Item>
      </Grid> */}
      <Grid item xs={2}>
          <Item><BasicDatePicker/></Item>
      </Grid>

    </React.Fragment>
  );
}

function SecondFormRow() {
    return (
      <React.Fragment>
        <Grid item xs={2}>
         <Item>
            <TextField 
                id="filled-read-only-input" 
                label="담당자"
                InputProps={{
                    readOnly: true,
                }} 
                variant="filled"
                value="손준우" 
            />
          </Item>
          {/* <Item>Item</Item> */}
        </Grid>
        <Grid item xs={2}>
            <Item>
                <TextField 
                    id="filled-read-only-input" 
                    label="연락처"
                    InputProps={{
                        readOnly: true,
                    }} 
                    variant="filled"
                    value="010-1234-4567" 
                />
            </Item>
        </Grid>
        <Grid item xs={2}>
            <Item>
                <TextField 
                    id="filled-read-only-input" 
                    label="이메일"
                    InputProps={{
                        readOnly: true,
                    }} 
                    variant="filled"
                    value="sjw3957@gmail.com" 
                />
            </Item>
        </Grid>
      </React.Fragment>
    );
  }

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FirstFormRow />
        </Grid>
        {/* <Grid container item spacing={3}>
          <FormRow />
        </Grid> */}
        <Grid container item spacing={3}>
          <SecondFormRow />
        </Grid>
      </Grid>
    </Box>
  );
}

/*
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

//테이블=================================================
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { FormControlLabel, Icon, Switch } from '@mui/material';

// 아이콘 사용=============================================
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import HorizonLine from './HorizontalLine';

// Combobox : 회사 이름 넣기
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

function BasicDatePicker() {
    const [value, setValue] = React.useState(null);
  
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="계획등록일"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
      </LocalizationProvider>
    );
}

function FirstFormRow() {
    return (
        <React.Fragment>
            <Grid item xs={2}>
                <Item>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{width: 280}}
                        renderInput={(params) => <TextField {...params} label="회사" />}
                    />
                </Item>
            </Grid>
            
            <Grid item xs={2}>
                <Item><BasicDatePicker/></Item>
            </Grid>

        </React.Fragment>
    );
}

function SecondFormRow() {
    return (
        <React.Fragment>
            <Grid item xs={2}>
            <Item>
                <TextField 
                    id="filled-read-only-input" 
                    label="담당자"
                    InputProps={{
                        readOnly: true,
                    }} 
                    variant="filled"
                    value="손준우" 
                />
            </Item>
            </Grid>
            
            <Grid item xs={2}>
            <Item>
                <TextField 
                    id="filled-read-only-input" 
                    label="연락처"
                    InputProps={{
                        readOnly: true,
                    }} 
                    variant="filled"
                    value="010-1234-4567" 
                />
            </Item>
            </Grid>
            
            <Grid item xs={2}>
            <Item>
                <TextField 
                    id="filled-read-only-input" 
                    label="이메일"
                    InputProps={{
                        readOnly: true,
                    }} 
                    variant="filled"
                    value="sjw3957@gmail.com" 
                />
            </Item>
            </Grid>
        </React.Fragment>
    );
}
  
//테이블 데이터
function createData(id1, id2, id3, id4, id5, id6, id7, id8, id9) {
    return {
        id1, id2, id3, id4, id5, id6, id7, id8, id9
    };
}

// 테이블 데이터
const rows = [

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
    
        const order = comparator(a[0], b[0]);
    
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'id1',
        numeric: false,
        disablePadding: true,
        label: '회사',
    },
    {
        id: 'id2',
        numeric: true,
        disablePadding: false,
        label: '사업장',
    },
    {
        id: 'id3',
        numeric: true,
        disablePadding: false,
        label: '등록일',
    },
    {
        id: 'id4',
        numeric: true,
        disablePadding: false,
        label: '총수량',
    },
    {
        id: 'id5',
        numeric: true,
        disablePadding: false,
        label: '담당자',
    },
    {
        id: 'id6',
        numeric: true,
        disablePadding: false,
        label: '생성일',
    },
    {
        id: 'id7',
        numeric: true,
        disablePadding: false,
        label: '생성자',
    },
    {
        id: 'id8',
        numeric: true,
        disablePadding: false,
        label: '수정일',
    },
    {
        id: 'id9',
        numeric: true,
        disablePadding: false,
        label: '수정자',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
        <TableRow>
        <TableCell padding="checkbox">
        <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
        />
        </TableCell>
            {headCells.map((headCell) => (
                <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? 'right' : 'left'}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderBy === headCell.id ? order : false}
                >
                <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                    ) : null}
                </TableSortLabel>
                </TableCell>
            ))}
        </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                bgcolor: (theme) =>
                alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
            }),
            }}
        >

        {numSelected > 0 ? (
            <Typography
                sx={{ flex: '1 1 100%' }}
                color="inherit"
                variant="subtitle1"
                component="div"
            >
            {numSelected} selected
            </Typography>
        ) : (
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Nutrition
            </Typography>
        )}

        {numSelected > 0 ? (
            <Tooltip title="Delete">
            <IconButton>
                <DeleteIcon/>
            </IconButton>
            </Tooltip>
        ) : (
            <Tooltip title="Filter list">
            <IconButton>
                <FilterListIcon />
            </IconButton>
            </Tooltip>
        )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function NestedGrid() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              
                <h1><WebAssetIcon />생산계획등록</h1>
        
                <Grid container item spacing={3}>
                    <FirstFormRow />
                </Grid>
                <Grid container item spacing={3}>
                    <SecondFormRow />
                </Grid>
            </Grid>

        <HorizonLine/>

        <h1><FormatListBulletedIcon /> 목록</h1>
          
        <TableContainer>
            <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
            >
            <EnhancedTableHead
                umSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
            />
            <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                        <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.name)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.name}
                            selected={isItemSelected}
                        >
                        <TableCell padding="checkbox">
                        <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                                'aria-labelledby': labelId,
                            }}
                        />
                        </TableCell>
                        <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                        >
                            {row.id1}
                        </TableCell>
                            <TableCell align="right">{row.id2}</TableCell>
                            <TableCell align="right">{row.id3}</TableCell>
                            <TableCell align="right">{row.id4}</TableCell>
                            <TableCell align="right">{row.id5}</TableCell>
                            <TableCell align="right">{row.id6}</TableCell>
                            <TableCell align="right">{row.id7}</TableCell>
                            <TableCell align="right">{row.id8}</TableCell>
                            <TableCell align="right">{row.id9}</TableCell>
                        </TableRow>
                    );
                })}
                {emptyRows > 0 && (
                    <TableRow
                        style={{
                            height: (dense ? 33 : 53) * emptyRows,
                        }}
                    >
                        <TableCell colSpan={6}/>
                    </TableRow>
                )}
                </TableBody>
            </Table>
            </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

                <HorizonLine />
          
            <h1><FormatListBulletedIcon /> 상세</h1>
          
        <TableContainer>
            <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
            s   ize={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>    
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.id1}
                      </TableCell>
                      <TableCell align="right">{row.id2}</TableCell>
                      <TableCell align="right">{row.id3}</TableCell>
                      <TableCell align="right">{row.id4}</TableCell>
                      <TableCell align="right">{row.id5}</TableCell>
                      <TableCell align="right">{row.id6}</TableCell>
                      <TableCell align="right">{row.id7}</TableCell>
                      <TableCell align="right">{row.id8}</TableCell>
                      <TableCell align="right">{row.id9}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          />
          
        <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
        />

      </Box>
  );
}
*/