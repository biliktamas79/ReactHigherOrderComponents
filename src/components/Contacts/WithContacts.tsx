import * as React from "react";

interface IWithContacts<TData> {
    contacts: TData[],
    loading: boolean
}

interface IWrappedComponentProps<TData> {
    contacts: TData[]
}

// tslint:disable-next-line:ban-types
const withQuery = <TData extends Object>(query: () => Promise<TData[]>) => (WrappedComponent: React.ComponentType<IWrappedComponentProps<TData>>) => class WithContacts extends React.PureComponent<{}, IWithContacts<TData>> {
    constructor(props: {}) {
        super(props);

        this.state = {
            contacts: [],
            loading: false
        };
    }

    public componentDidMount() {
        this.setState({
            contacts: [],
            loading: true
        });

        // (data: TData[]) => )

        query()
            .then((data: TData[]) => this.setState({
                contacts: data,
                loading: false
            }))
    }

    public render() {
        return <div>
            {
                this.state.loading ?
                    <div>Loading...</div> :
                    <WrappedComponent contacts={this.state.contacts} {...this.props} />
            }
        </div>
    }
}

export default withQuery;