package TheatreTicketBookingSystem.domain;

import TheatreTicketBookingSystem.domain.Intefaces.Seating_Class;

/**
 * Created by Hasan on 10/31/2017.
 */
public class VVIP implements Seating_Class {

    private String class_name;
    private int price;
    private int seat_id;

    public VVIP() {
    }

    public String getClass_name() {
        return class_name;
    }

    public int getPrice() {
        return price;
    }

    public int getSeat_id() {
        return seat_id;
    }

    public VVIP(Builder builder){
        this.class_name = builder.class_name;
        this.price = builder.price;
        this.seat_id = builder.seat_id;
    }

    public static class Builder{
        private String class_name;
        private int price;
        private int seat_id;
//        private Recipe recipe;
//        private Viewer viewer;


        public Builder class_name(String class_name) {
            this.class_name = class_name;
            return this;
        }

        public Builder price(int price) {
            this.price = price;
            return this;
        }

        public Builder seat_id(int seat_id) {
            this.seat_id = seat_id;
            return this;
        }

//        public Builder recipe(Recipe recipe) {
//            this.recipe = recipe;
//            return this;
//        }
//
//        public Builder viewer(Viewer viewer) {
//            this.viewer = viewer;
//            return this;
//        }

        public VVIP build(){
            return new VVIP(this);
        }
    }
}
