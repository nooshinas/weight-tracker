import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Weight } from "./Weight";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: false, name: "first_name" })
  firstName: string;

  @Column("text", { nullable: false, name: "last_name" })
  lastName: string;

  @OneToMany(() => Weight, (weight) => weight.user)
  weight: Weight[];
}
