//Author: Alfonso Fernandez Alvarez
//Version: 1.0


// /client/table.js
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import { lighten } from '@material-ui/core/styles/colorManipulator';


//Create table with the information of Home State
let counter = 0;
function createData(id, brand, model, color, fuel_type, engine_volume, traction, price) {
  counter += 1;
  return { id: id, brand, model, color, fuel_type, engine_volume, traction, price };
}

//function of order number
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

//function for order
function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

//if not change the type, orderby, only change asc or desc
function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

//id of the table
const rows = [
  { id: 'id', numeric: true, disablePadding: true, label: 'ID' },
  { id: 'brand', numeric: false, disablePadding: false, label: 'Brand' },
  { id: 'model', numeric: false, disablePadding: false, label: 'Model' },
  { id: 'color', numeric: false, disablePadding: false, label: 'Color' },
  { id: 'fuel_type', numeric: false, disablePadding: false, label: 'Fuel Type' },
  { id: 'engine_volume', numeric: true, disablePadding: false, label: 'Engine Volume' },
  { id: 'traction', numeric: true, disablePadding: false, label: 'Traction' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
];

//Class of the table
class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;
    return (
      <TableHead>
        <TableRow >
          <TableCell padding="checkbox">
            <Checkbox
              style={{ color: "#53D061" }}
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'center' : 'center'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
    style={{ backgroundColor: "lightseagreen" }}
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="default" variant="h4" style={{color:"#fff"}}>
            {numSelected} Selected
          </Typography>
        ) : (
            <Typography variant="h4" id="tableTitle" style={{color:"#fff"}}>
              List of Cars
          </Typography>
          )}
      </div>
      <div className={classes.spacer} />

    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'id',
    selected: [],
    data: [],
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  //select all the checks
  handleSelectAllClick = event => {
    const data = this.props.info;
    const all = [];

    this.setState({ data: this.props.info });
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      data.forEach(data => {
        all.push(data.id);
      });
      this.props.selected(all);
      return;
    }
    this.setState({ selected: [] });
    this.props.selected([]);
  };

  //clicks in the tables, checks and orders
  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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

    this.setState({ selected: newSelected });
    this.props.selected(newSelected);
  };

  //set changes
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  //changes or row for page
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  //check if is selected
  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    //Recive the props
    const { order, orderBy, rowsPerPage, page } = this.state;
    const data = this.props.info;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    console.log(orderBy);
    console.log(order);

    return (
      <Paper style={{ overflowX:"auto" }}>
        <EnhancedTableToolbar numSelected={this.props.numselect.length}  />
        <div>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={this.props.numselect.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} style={{ color: "#53D061" }} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none" align="center">
                        {n.id}
                      </TableCell>
                      <TableCell align="center">{n.brand}</TableCell>
                      <TableCell align="center">{n.model}</TableCell>
                      <TableCell align="center">{n.color}</TableCell>
                      <TableCell align="center">{n.fuel_type}</TableCell>
                      <TableCell align="center">{n.engine_volume}</TableCell>
                      <TableCell align="center">{n.traction}</TableCell>
                      <TableCell align="center">{n.price}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={9} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

//Types of props
EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  optionalArray: PropTypes.array,
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
};

export default withStyles(styles)(EnhancedTable);
export { EnhancedTable, EnhancedTableHead };