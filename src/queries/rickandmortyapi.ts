import {gql} from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
    query Character($page: Int) {
        characters(page: $page) {
            info {
                count
                next
                prev
                pages
            }
            results {
                id
                name
                image
                status
                species
                origin {
                    id
                    name
                    dimension
                    type
                    residents {
                        id
                    }
                }
                location {
                    id
                    name
                    dimension
                    type
                    residents {
                        id
                    }
                }
                episode {
                    id
                    name
                }
            }
        }
    }`;

export { GET_ALL_CHARACTERS };
