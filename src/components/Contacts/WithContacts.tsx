import * as React from "react";
import * as ContactsService from "../../api/ContactsService";
import IContact from "../../api/IContact";

interface IWithContacts {
    contacts: IContact[],
    loading?: boolean
}

interface IWrappedComponentProps {
    contacts: IContact[]
}

const withContacts = (WrappedComponent: React.ComponentType<IWrappedComponentProps>) => class WithContacts extends React.PureComponent<{}, IWithContacts> {
    constructor(props: {}) {
        super(props);
        
        this.state = {
          contacts: [],
        };
      }
    
      public componentDidMount() {
        this.setState({
            loading: true
        });

        ContactsService
          .getContacts()
          .then(contacts => this.setState({
            contacts,
            loading: false
          }))
      }
    
    public render() {
        return <div>
            {
                this.state.loading ? 
                    <div>Loading...</div> :
                    <WrappedComponent contacts={this.state.contacts} { ...this.props} />
            }
        </div>  
    }
}

export default withContacts;