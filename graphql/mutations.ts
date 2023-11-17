import { gql } from '@apollo/client';

export const REGISTER = gql`
    mutation Register($name: String!, $lastName: String!, $email: String!, $password: String!) {
        register(userInput: {
            name: $name,
            lastName: $lastName,
            email: $email,
            password: $password
        }) {

            response

        }
    }
`;

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(loginInput: {
            email: $email,
            password: $password
        }) {
            id
            name
            lastName
            email
            accessToken

        }
    }
`;

export const RECOVERY = gql`
    mutation Recovery($email: String!) {
        recovery(recoveryInput: {
            email: $email
        }) {
            
            response

        }
    }
`;

export const VALIDATERECOVERY = gql`
  mutation ValidateRecovery($recoveryPass: Int!) {
      validateRecovery(validaterecoveryInput: {
          recoveryPass: $recoveryPass
      }) {
          
          response

      }
  }
`;

export const CHANGEPASSRECOVERY = gql`
  mutation ChangePassRecovery($password: String!, $recoveryPass: Int!) {
      changePassRecovery(changePassRecoveryUserInput: {
          password: $password,
          recoveryPass: $recoveryPass
      }) {
          
          response

      }
  }
`;

export const CHANGEPASSWORD = gql`
    mutation ChangePassword($email: String!, $oldPassword: String!, $newPassword: String!) {
        changePassword(changePassInput: {
            email: $email,
            oldPassword: $oldPassword,
            newPassword: $newPassword
        }) {
            
            response
    
        }
    }
    `;

export const UPDATEUSER = gql`
  mutation UpdateUser($oldEmail: String!, $name: String!, $lastName: String!, $email: String!) {
      updateUser(updateUserInput: {
          oldEmail: $oldEmail,
          name: $name,
          lastName: $lastName,
          email: $email
      }) {
          
          response

      }
  }
`;

export const CREATETEAM = gql`
    mutation CreateTeam($name: String!, $description: String!, $idUser: Int!) {
        createTeam(createTeamInput: {
            name: $name,
            description: $description,
            idUser: $idUser
        }) {
            
            id
    
        }
    }
`;

export const UPDATETEAM = gql`
    mutation UpdateTeam($idTeam: Int!, $idUser: Int!, $name: String!, $description: String!) {
        updateTeam(updateTeamInput: {
            idTeam: $idTeam,
            idUser: $idUser,
            name: $name,
            description: $description
        }) {
            
            response

        }
    }
`;

export const ADDTEAM = gql`
    mutation AddTeam($idUser: Int!, $idTeam: Int!) {
        addTeam(addTeamInput: {
            idUser: $idUser,
            idTeam: $idTeam
        }) {
            
            response

        }
    }
`;

export const ADDUSERS = gql`
    mutation AddUsers($idTeam: Int!, $email: String!) {
        addUsers(addUsersInput: {
            idTeam: $idTeam,
            email: $email
        }) {
            
            response

        }
    }
`;

export const DELETEUSER = gql`
    mutation DeleteUser($idUser: Int!, $password: String!) {
        deleteUser(deleteUserInput: {
            idUser: $idUser
            password: $password
        }) {
            
            response

        }
    }
`;

export const CREATEPROJECT = gql`
    mutation CreateProject($name: String!, $description: String!, $idTeam: Int!) {
        createProject(createProjectInput: {
            name: $name,
            description: $description,
            idTeam: $idTeam
        }) {
            
            id

        }
    }
`;

export const KICKUSER = gql`
    mutation KickUser($idTeam: Int!, $idUser: Int!) {
        kickUser(kickUserInput: {
            idTeam: $idTeam,
            idUser: $idUser
        }) {
            
            response

        }
    }
`;

export const CHANGECREATOR = gql`
    mutation ChangeCreator($idTeam: Int!, $idUser: Int!, $idNewCreator: Int!) {
        changeCreator(changeCreatorInput: {
            idTeam: $idTeam,
            idUser: $idUser,
            idNewCreator: $idNewCreator
        }) {
            
            response

        }
    }
`;

export const DELETETEAM = gql`
    mutation DeleteTeam($idTeam: Int!, $idCreator: Int!) {
        deleteTeam(deleteTeamInput: {
            idTeam: $idTeam,
            idCreator: $idCreator
        }) {
            
            response

        }
    }
`;

export const DELETEPROJECT = gql`
    mutation DeleteProject($id: Int!) {
        deleteProject(deleteProjectInput: {
            id: $id
        }) {

            response

          }
    }
`;

export const UPDATEPROJECT = gql`
    mutation UpdateProject($id: Int!, $name: String!, $description: String!) {
        updateProject(updateProjectInput: {
            id: $id,
            name: $name,
            description: $description
        }) {
            
            response

        }
    }
`;

export const ADDTEAMPROJECT = gql`
    mutation AddTeamProject($idProject: Int!, $idTeam: Int!) {
        addTeamProject(addTeamProjectInput: {
            idProject: $idProject,
            idTeam: $idTeam
        }) {
            
            response

        }
    }
`;