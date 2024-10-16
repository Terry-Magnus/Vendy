import React, { useState } from "react";
import Button from "../components/ui/button";
import Dialog from "../components/ui/dialog-box";
import Toast from "../components/ui/toast";
import Text from "../components/ui/text";
import FormControl from "../components/ui/form-control";

type User = {
  id: number;
  name: string;
  email: string;
};

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
  ]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [toastMessage, setToastMessage] = useState("");

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setShowDialog(true);
  };

  const handleDelete = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
    setToastMessage("User deleted successfully");
  };

  const handleSubmit = () => {
    if (selectedUser) {
      setUsers((prev) =>
        prev.map((user) => (user.id === selectedUser.id ? selectedUser : user))
      );
    }
    setShowDialog(false);
    setToastMessage("User updated successfully");
  };

  return (
    <div className="p-8">
      <Text size="2xl" variant="bold" color="black">
        User Management
      </Text>
      <table className="min-w-full mt-4 bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border space-x-2">
                <Button variant="secondary" onClick={() => handleEdit(user)}>
                  Edit
                </Button>
                <Button variant="primary" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit User Dialog */}
      {showDialog && (
        <Dialog
          title="Edit User"
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
        >
          <div className="space-y-4">
            <FormControl
              type="text"
              className="w-full px-4 py-2 border rounded"
              value={selectedUser?.name || ""}
              onChange={(e) =>
                setSelectedUser((prev) =>
                  prev ? { ...prev, name: e.target.value } : null
                )
              }
            />

            <FormControl
              type="email"
              className="w-full px-4 py-2 border rounded"
              value={selectedUser?.email || ""}
              onChange={(e) =>
                setSelectedUser((prev) =>
                  prev ? { ...prev, email: e.target.value } : null
                )
              }
            />
            <Button variant="primary" onClick={handleSubmit}>
              Save
            </Button>
          </div>
        </Dialog>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </div>
  );
};

export default UserManagementPage;
