import java.io.PrintWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class App {
    private static final String FILE_NAME = "datos.txt";
    private static ArrayList<String> tareas = new ArrayList<>();
    private static ArrayList<String> observadores = new ArrayList<>();

    public static void main(String[] args) {
        cargarDatos();
        Scanner scanner = new Scanner(System.in);
        int opcion;

        do {
            mostrarMenu();
            System.out.print("Elige una opción: ");
            opcion = scanner.nextInt();
            scanner.nextLine();  // Limpiar buffer
            switch (opcion) {
                case 1:
                    agregarTarea(scanner);
                    break;
                case 2:
                    agregarObservador(scanner);
                    break;
                case 3:
                    mostrarDatos();
                    break;
                case 4:
                    guardarDatos();
                    break;
                case 0:
                    System.out.println("¡Saliendo!");
                    break;
                default:
                    System.out.println("Opción no válida.");
            }
        } while (opcion != 0);

        scanner.close();
    }

    private static void cargarDatos() {
        // Aquí puedes cargar datos si es necesario
    }

    private static void guardarDatos() {
        try (PrintWriter writer = new PrintWriter(FILE_NAME)) {
            writer.println("06/02/2025: Carpeta de desarrollo comunitario - Cumplido");
            System.out.println("Datos guardados en " + FILE_NAME);
        } catch (IOException e) {
            System.out.println("Error al guardar datos.");
        }
    }

    private static void mostrarMenu() {
        System.out.println("\n--- Menú ---");
        System.out.println("1. Agregar Tarea");
        System.out.println("2. Agregar Observador");
        System.out.println("3. Mostrar Datos");
        System.out.println("4. Guardar Datos");
        System.out.println("0. Salir");
    }

    private static void agregarTarea(Scanner scanner) {
        System.out.print("Escribe la tarea: ");
        String tarea = scanner.nextLine();
        tareas.add(tarea);
        System.out.println("Tarea agregada.");
    }

    private static void agregarObservador(Scanner scanner) {
        System.out.print("Escribe el observador: ");
        String observador = scanner.nextLine();
        observadores.add(observador);
        System.out.println("Observador agregado.");
    }

    private static void mostrarDatos() {
        System.out.println("\n--- Tareas ---");
        for (String tarea : tareas) {
            System.out.println("- " + tarea);
        }

        System.out.println("\n--- Observadores ---");
        for (String observador : observadores) {
            System.out.println("- " + observador);
        }
    }
}
