package mk.ukim.finki.labb.dto;


import mk.ukim.finki.labb.model.domain.User;
import mk.ukim.finki.labb.model.enums.Role;

import java.util.List;

public record CreateUserDto(
        String username,
        String password,
        String repeatPassword,
        String name,
        String surname,
        Role role
) {

    /*
        todo: add repeat password logic
     */
    public User toUser() {
        return new User(username, password, name, surname, role);
    }

    public static CreateUserDto from(User user) {
        return new CreateUserDto(user.getUsername(), user.getPassword(), user.getPassword(), user.getName(), user.getSurname(), user.getRole());
    }

    public static List<CreateUserDto> from(List<User> users) {
        return users.stream().map(CreateUserDto::from).toList();
    }
}

