import React, { useState } from "react";
import "./WeightTracker.scss";
import { useGetWeights } from "../../hooks/weight/useGetWeights";
import { useCreateWeight } from "../../hooks/weight/useCreateWeight";
import { useUpdateWeight } from "../../hooks/weight/useUpdateWeight";
import { useGetUser } from "../../hooks/user/useGetUser";
import { useDeleteWeight } from "../../hooks/weight/useDeleteWeight";
import { Weight } from "../../interfaces/weight";
import { FaPlus } from "react-icons/fa";
import WeightForm from "./weight-form/WeightForm";
import WeightList from "./weight-list/WeightList";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";
import Loading from "../../components/loading/Loading";
import Alert from "../../components/alert/Alert";

const WeightTracker = () => {
  const [updatedValues, setUpdatedValues] = useState<Partial<Weight>>();
  const [modalVisible, setModalVisible] = useState(false);

  const { user } = useGetUser(1);
  const { weights, loading, error } = useGetWeights(user?.id);

  const [createWeight] = useCreateWeight(user?.id);
  const [deleteWeight] = useDeleteWeight(user?.id);
  const [updateWeight] = useUpdateWeight(user?.id);

  const handleSubmit = async (values: any) => {
    if (updatedValues?.id) {
      await updateWeight({
        variables: {
          ...values,
          id: updatedValues.id,
          measurement: "kg",
          userId: user?.id,
        },
      });
    } else {
      await createWeight({
        variables: {
          ...values,
          measurement: "kg",
          userId: user?.id,
        },
      });
    }

    setModalVisible(false);
    setUpdatedValues({});
  };

  const handleDelete = async (id: number) => {
    await deleteWeight({
      variables: { id, userId: user?.id },
    });
  };

  if (loading) return <Loading />;
  if (error) return <Alert message="An error occurred" />;

  return (
    <div>
      <div className="tracker-header">
        <h3 className="tracker-title">{user?.firstName} weights measurement</h3>
        <Button
          className="tracker-action"
          onClick={() => {
            setModalVisible(true);
            setUpdatedValues({});
          }}
        >
          <FaPlus className="btn-icon" />
          <span className="btn-title"> Add weight</span>
        </Button>
      </div>
      {weights ? (
        <WeightList
          weights={weights}
          onDelete={handleDelete}
          onUpdate={(updatedValues) => {
            setModalVisible(true);
            setUpdatedValues(updatedValues);
          }}
        />
      ) : null}
      <Modal
        title={
          updatedValues && Object.keys(updatedValues).length !== 0
            ? " Update your weight"
            : "Add your weight"
        }
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setUpdatedValues({});
        }}
      >
        <WeightForm
          initValue={updatedValues}
          onSubmit={(values: Weight) => handleSubmit(values)}
        />
      </Modal>
    </div>
  );
};

export default WeightTracker;
