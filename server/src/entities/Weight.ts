import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Weight extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  measurement: string;

  @Column()
  weight: number;

  @Column({
    type: "timestamptz",
    nullable: false,
    transformer: {
      to(date) {
        return date;
      },
      from(date) {
        return date.toJSON().slice(0, 10);
      },
    },
  })
  date: Date;

  @ManyToOne(() => User, (user) => user.weight)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;
}
